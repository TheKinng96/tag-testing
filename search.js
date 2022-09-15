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
       },
     }
     
      if (window.ShopifyAnalytics.meta.page.pageType === 'product') {
        details.yahoo_retargeting_page_type = 'detail';
      } else if (window.ShopifyAnalytics.meta.page.pageType === 'collection') {
        details.yahoo_retargeting_page_type = 'category';
      } else if (window.ShopifyAnalytics.meta.page.pageType === 'searchresults') {
        details.yahoo_retargeting_page_type = 'search';
      }
 
       ytag(details);
    `;
  
  let body = document.body;
  body.appendChild(temp);
  body.appendChild(script);
})()
