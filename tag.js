(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `<script async src="https://s.yimg.jp/images/listing/tool/cv/ytag.js"></script>
    <script>
      ytag({"type":"ycl_cookie"});
    </script>
    <script async>
    ytag({
      "type": "yss_conversion",
      "config": {
        "yahoo_conversion_id": "1001259409",
        "yahoo_conversion_label": "lEJMCLn98dgDEOOcq-8o",
        "yahoo_conversion_value": window.Shopify.checkout.subtotal_price.toString()
      }
    });
    </script>`
  let head = document.head
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName)
      element.innerHTML = item.innerHTML
      document.getElementsByTagName( "head" )[0].appendChild(element)
  });
})()
