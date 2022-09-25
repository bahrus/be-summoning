import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface EndUserProps{

}

export interface VirtualProps extends EndUserProps, MinimalProxy{
    for: any;
}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy,
}

export type PP = ProxyProps;

export interface Actions{
    intro(proxy: Proxy, self: Element): void,
}
