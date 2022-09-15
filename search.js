(function () {
  let temp = document.createElement('script')
  temp.setAttribute('async', '');
  temp.setAttribute(
    'src',
    'https://s.yimg.jp/images/listing/tool/cv/ytag.js',
  );
  
  let script = document.createElement('script');
  script.setAttribute('defer', '');
  script.innerHTML = `
    window.yjDataLayer = window.yjDataLayer || [];
    function ytag() { yjDataLayer.push(arguments); }
      
      let details = {
       "type": "yjad_retargeting",
       "config": {
         "yahoo_retargeting_id": "8YRDX0ZJLS",
         "yahoo_retargeting_label": "",
         "yahoo_retargeting_page_type": "home",
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
     
      if (window.ShopifyAnalytics.meta.page.pageType === 'product') {
        details.yahoo_retargeting_page_type = 'detail';
        details.yahoo_retargeting_items = [{
          item_id: window.ShopifyAnalytics.meta.product.id,
          category_id: window.ShopifyAnalytics.meta.product.type,
          price: window.ShopifyAnalytics.meta.product.variants[0].price / 100,
          quantity: ""
        }];
      } else if (window.ShopifyAnalytics.meta.page.pageType === 'collection') {
        details.yahoo_retargeting_page_type = 'category';
        details.yahoo_retargeting_items = window.ShopifyAnalytics.meta.products.map(item => {
          return { 
            id: item.id,
            category_id: item.type,
            price: item.variants[0].price / 100,
            quantity: '' 
           }
         })
      } else if (window.ShopifyAnalytics.meta.page.pageType === 'searchresults') {
        details.yahoo_retargeting_page_type = 'search';
      }
 
       console.log(details);
       ytag(details);
    `;
  
  let body = document.body;
  body.appendChild(temp);
  body.appendChild(script);
})()
