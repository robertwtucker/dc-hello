"use strict";
var helloComponent = {
    id: "HelloComponent",
    render: function (ctx, me) {
        me.tag = "div";
        me.children = "Hello, " + ctx.data.name + "!";
    }
};
function helloComponentFactory(name) {
    return {
        data: {
            name: name
        },
        component: helloComponent
    };
}
exports.helloComponentFactory = helloComponentFactory;
