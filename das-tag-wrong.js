(function () {
  let temp = document.createElement('script')
  temp.innerHTML = `
  <!-- AdSIST Yahoo Search Ad Conversion Tag -->
        <script type="text/javascript">
            /* <![CDATA[ */
            var yahoo_conversion_id = :conversion_id;
            var yahoo_conversion_label = ":conversion_label";
            var yahoo_conversion_value = window.Shopify.checkout.subtotal_price;
            /* ]]> */
        </script>
        <script type="text/javascript" src="https://s.yimg.jp/images/listing/tool/cv/conversion.js">
        </script>
        <script>
            (function () {
                let img = document.createElement('img')
                const head = document.head
                img.src = 'https://b91.yahoo.co.jp/pagead/conversion/:conversion_id/?value=' + window.Shopify.checkout.subtotal_price + '&label=:conversion_label&guid=ON&script=0&disvt=true'
                img.width = '1'
                img.height = '1'
                img.border = "0"
                document.getElementsByTagName("head")[0].appendChild(img)
            })()
        </script>
        <!-- end of AdSIST Yahoo Search Ad Conversion Tag -->`;
  
    let head = document.head
    Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName)
      if (item.getAttribute('src')) {
          element.src = item.getAttribute('src');
          element.async = true;
      }
      element.innerHTML = item.innerHTML;
      document.getElementsByTagName("head")[0].appendChild(element)
  });
})()
