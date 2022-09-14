(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `<script type="text/javascript" async>
          window.addEventListener('load', () => {
            let price = window.Shopify.checkout.subtotal_price;
            console.log(window.Shopify.checkout.subtotal_price);
            const docu = new DOMParser().parseFromString("<xml></xml>", "application/xml");
            
            let section = "var yahoo_conversion_id = 1001260891; var yahoo_conversion_label = 'swEjCI_M5doDEJqp5_Io'; var yahoo_conversion_value = " + window.Shopify.checkout.subtotal_price + ";";
            const cdata = docu.createCDATASection(section);
            docu.querySelector("xml").appendChild(cdata);
          });
        </script>
        <script type="text/javascript" src="https://s.yimg.jp/images/listing/tool/cv/conversion.js">
        </script>
        <script type="text/javascript" async>
            (function () {
                let img = document.createElement('img')
                const head = document.head
                img.src = 'https://b91.yahoo.co.jp/pagead/conversion/1001260891/?value=' + window.Shopify.checkout.subtotal_price + '&label=swEjCI_M5doDEJqp5_Io&guid=ON&script=0&disvt=true'
                img.width = '1'
                img.height = '1'
                img.border = "0"
                document.getElementsByTagName("head")[0].appendChild(img)
            })()
        </script>`
  let head = document.head
  
  Array.prototype.forEach.call(temp.children, function(item) {
      let element = document.createElement(item.tagName)
      element.innerHTML = item.innerHTML
      document.getElementsByTagName( "head" )[0].appendChild(element)
  });
})()
