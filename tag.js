(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `
    <!-- AdSIST YDN sitegeneraltag -->
    <script async src="https://s.yimg.jp/images/listing/tool/cv/ytag.js"></script>
    <script>
      window.yjDataLayer = window.yjDataLayer || [];
      function ytag() { yjDataLayer.push(arguments); }
      ytag({"type":"ycl_cookie"});
    </script>
    <!--End AdSIST YDN sitegeneraltag -->
    <!-- AdSIST YDN CV -->
    <script type="text/javascript" async>      
      setTimeout(() => {
      console.log('fired');
      
        ytag({
            "type": "yjad_conversion",
            "config": {
                "yahoo_ydn_conv_io": "pSdR8AllEdJ4IZpJ-9SwEQ..",
                "yahoo_ydn_conv_label": "HZH40WFQ3MPMFTU9VN4926987",
                "yahoo_ydn_conv_transaction_id": \`${window.Shopify.checkout.order_id}\`,
                "yahoo_ydn_conv_value": \`${window.Shopify.checkout.subtotal_price.toString()}\`
            }
        });

        ytag({
          "type": "yss_conversion",
          "config": {
            "yahoo_conversion_id": "1001259409",
            "yahoo_conversion_label": "lEJMCLn98dgDEOOcq-8o",
            "yahoo_conversion_value": "window.Shopify.checkout.subtotal_price.toString()"
          }
        });
      }, 1000);
    </script>`
  let head = document.head
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName)
      element.innerHTML = item.innerHTML
      document.getElementsByTagName( "head" )[0].appendChild(element)
  });
})()
