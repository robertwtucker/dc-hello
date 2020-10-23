/// <reference path="../../Libraries/bobril/library.d.ts"/>
/// <reference path='../../Libraries/dc-helpers/library.ts'/>

interface IData {
    name: string;
}

interface ICtx {
    data: IData;
}

const helloComponent: IBobrilComponent = {

    id: "HelloComponent",

    render(ctx: ICtx, me: IBobrilNodeWithTag | IBobrilNodeWithComponent | IBobrilNodeWithChildren): void {
        me.tag = "div";
        me.children = `Hello, ${ctx.data.name}!`;
    }

};

export function helloComponentFactory(
    name: string
): IBobrilNode {
    return {
        data: <IData>{
            name
        },
        component: helloComponent
    };
}
