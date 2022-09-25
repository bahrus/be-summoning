import { define } from 'be-decorated/be-decorated.js';
import { register } from "be-hive/register.js";
export class BeSummoning extends EventTarget {
    intro(proxy, self) {
        const t = this;
        const gatewayProxy = new Proxy(self, {
            get(obj, prop, receiver) {
                if (!(prop in obj)) {
                    obj[prop] = t.#createQueryingProxy(self);
                }
                return Reflect.get(obj, prop, receiver);
            }
        });
        proxy.for = gatewayProxy;
    }
    #createQueryingProxy(self) {
        const queryingProxy = new Proxy({}, {
            get(obj, prop) {
                console.log({ prop });
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
