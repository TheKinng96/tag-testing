(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `
    <script async src="https://s.yimg.jp/images/listing/tool/cv/ytag.js"></script>
    <script type="text/javascript" defer>
      window.yjDataLayer = window.yjDataLayer || [];

      function ytag() { yjDataLayer.push(arguments); }
      ytag({"type":"ycl_cookie"});
      
      let details = {
       "type": "yjad_retargeting",
       "config": {
         "yahoo_retargeting_id": "8YRDX0ZJLS",
         "yahoo_retargeting_label": "",
         "yahoo_retargeting_page_type": "detail",
         "yahoo_retargeting_items": [
           {
               item_id: "${window.ShopifyAnalytics.meta.product.id}",
               category_id: "${window.ShopifyAnalytics.meta.product.type}",
               price: "${window.ShopifyAnalytics.meta.product.variants[0].price / 100}",
               quantity: ""
           },
         ],
       },
     }
     if (${window.ShopifyAnalytics.meta.page.pageType === 'product'}) {
        let test = [${window.ShopifyAnalytics.meta.product}].map(item => {
          return {
            item_id: item.id,
            category_id: item.type
            price: item.variants[0].price / 100
            quantity: ""
          }
        })
         console.log(test)
         ytag({
           "type": "yjad_retargeting",
           "config": {
             "yahoo_retargeting_id": "8YRDX0ZJLS",
             "yahoo_retargeting_label": "",
             "yahoo_retargeting_page_type": 'detail',
             "yahoo_retargeting_items": [
               {
                   item_id: ${window.ShopifyAnalytics.meta.product.id},
                   category_id: "",
                   price: ${window.ShopifyAnalytics.meta.product.variants[0].price / 100},
                   quantity: ""
               },
             ],
           },
         });
         ytag({
           "type": "yjad_retargeting",
           "config": {
             "yahoo_retargeting_id": "8YRDX0ZJLS",
             "yahoo_retargeting_label": "",
             "yahoo_retargeting_page_type": 'detail',
             "yahoo_retargeting_items": [
               {
                   item_id: "${window.ShopifyAnalytics.meta.product.id}",
                   category_id: "${window.ShopifyAnalytics.meta.product.type}",
                   price: "${window.ShopifyAnalytics.meta.product.variants[0].price / 100}",
                   quantity: ""
               },
             ],
           },
         });
       }
    </script>`
  
  let head = document.head;
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName);
      element.innerHTML = item.innerHTML;
      document.getElementsByTagName( "head" )[0].appendChild(element);
  });
})()
