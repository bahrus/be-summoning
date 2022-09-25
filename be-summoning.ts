import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {Actions, VirtualProps, PP, Proxy, ProxyProps} from './types';
import {register} from "be-hive/register.js";

export class BeSummoning extends EventTarget implements Actions{
    intro(proxy: Proxy, self: Element): void {
        const t = this;
        const gatewayProxy = new Proxy(self, {
            get(obj: any, prop, receiver){
                if(!(prop in obj)){
                    obj[prop] = t.#createQueryingProxy(self);
                }
                return Reflect.get(obj, prop, receiver);
                
            }
        });
        proxy.for = gatewayProxy;
    }

    #createQueryingProxy(self: Element, ){
        const queryingProxy = new Proxy({}, {
            get(obj: any, prop){
                console.log({prop});
            }
        });
        return queryingProxy;
    }
}

const tagName = 'be-summoning';

const ifWantsToBe = 'summoning';

const upgrade = '*';

define<Proxy & BeDecoratedProps<Proxy, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
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
