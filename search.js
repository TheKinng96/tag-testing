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
               item_id: "",
               category_id: "",
               price: "",
               quantity: ""
           },
         ],
       },
     }
     
     switch (${window.ShopifyAnalytics.meta.page.pageType}) {
      case 'product':
        details.yahoo_retargeting_page_type = 'detail';
        details.yahoo_retargeting_items = [{
          item_id: ${window.ShopifyAnalytics.meta.product.id},
          category_id: "",
          price: ${window.ShopifyAnalytics.meta.product.variants[0].price / 100},
          quantity: ""
        }];
        break;
      case 'collection':
        details.yahoo_retargeting_page_type = 'category';
        details.yahoo_retargeting_items = ${window.ShopifyAnalytics.meta.products.map(item => {return { id: item.id, category_id: item.type, price: item.variants[0].price / 100, quantity: '' }})}
        break;
      case 'searchresults':
        details.yahoo_retargeting_page_type = 'search';
        break;
      default:
        details.yahoo_retargeting_page_type = 'home';
        break;
    }
 
       console.log(details);
       ytag(details);
      }
    </script>`
  
  let head = document.head;
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName);
      element.innerHTML = item.innerHTML;
      document.getElementsByTagName( "head" )[0].appendChild(element);
  });
})()
