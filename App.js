import Products from "./Products.js";

var template = `<div>
<h1>库存管理系统</h1>
<Products />
</div>`;

export default{
    components:{
        Products,
    },
    template,
};