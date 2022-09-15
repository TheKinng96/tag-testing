(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `
    <script async src="https://s.yimg.jp/images/listing/tool/cv/ytag.js"></script>
    <script type="text/javascript" defer>
      window.yjDataLayer = window.yjDataLayer || [];

      function ytag() { yjDataLayer.push(arguments); }
      ytag({"type":"ycl_cookie"});
      
      ${
        console.log('hi there')
        }
        let retargetingDetail = {
          "type":"yjad_retargeting",
          "config":{
            "yahoo_retargeting_id": "8YRDX0ZJLS",
            "yahoo_retargeting_label": "",
            "yahoo_retargeting_page_type": "",
            "yahoo_retargeting_items":[
              {item_id: '', category_id: '', price: '', quantity: ''}
            ]
          }
        };

        let currentPage = location.href;
        if (window.ShopifyAnalytics.meta.page.pageType === 'product') {
            retargetingDetail.config.yahoo_retargeting_page_type = 'detail'
            retargetingDetail.config.yahoo_retargeting_items = [
                {
                    item_id: window.ShopifyAnalytics.meta.product.id,
                    category_id: window.ShopifyAnalytics.meta.product.type,
                    price: window.ShopifyAnalytics.meta.product.variants[0].price / 100,
                    quantity: ""
                }
            ]
        } else if (window.ShopifyAnalytics.meta.page.pageType === 'collection') {
            targetingObject.config.yahoo_retargeting_page_type = 'category'
        } else if (window.ShopifyAnalytics.meta.page.pageType === 'cart') {
            targetingObject.config.yahoo_retargeting_page_type = 'cart'
        } else if (window.ShopifyAnalytics.meta.page.pageType === 'searchresults') {
            targetingObject.config.yahoo_retargeting_page_type = 'search'
        } else {
            targetingObject.config.yahoo_retargeting_page_type = 'home'
        }

        ytag(retargetingDetail);
      
    </script>`
  
  let head = document.head
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName)
      element.innerHTML = item.innerHTML
      document.getElementsByTagName( "head" )[0].appendChild(element)
  });
})()
