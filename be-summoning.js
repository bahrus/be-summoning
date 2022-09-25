import { define } from 'be-decorated/be-decorated.js';
import { register } from "be-hive/register.js";
import { camelToLisp } from 'trans-render/lib/camelToLisp.js';
export class BeSummoning extends EventTarget {
    intro(proxy, self) {
        const t = this;
        const gatewayProxy = new Proxy(self, {
            get(obj, prop, receiver) {
                if (!(prop in obj)) {
                    obj[prop] = t.#createQueryingProxy(self, prop);
                }
                return Reflect.get(obj, prop, receiver);
            }
        });
        proxy.for = gatewayProxy;
    }
    #createQueryingProxy(self, firstToken) {
        const lisp = camelToLisp(firstToken);
        const attr = lisp.substring(0, lisp.length - 1);
        console.log({ attr });
        const queryingProxy = new Proxy({}, {
            get(obj, prop) {
                const val = camelToLisp(prop);
                console.log({ val });
                return self.querySelector(`[${attr}="${val}"]`);
            }
        });
        return queryingProxy;
    }
}
const tagName = 'be-summoning';
const ifWantsToBe = 'summoning';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            virtualProps: ['for'],
            intro: 'intro'
        },
    },
    complexPropDefaults: {
        controller: BeSummoning
    }
});
register(ifWantsToBe, upgrade, tagName);
