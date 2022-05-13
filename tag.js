(function () {
  let temp = document.createElement('div')
  temp.innerHTML = `<!-- AdSIST Tool --><script nonce="xhAsgQqo">
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '392573592583627');
  fbq('track', 'PageView');
</script>
<noscript>
  <img height="1" width="1" style="display:none" 
      src="https://www.facebook.com/tr?id=392573592583627&ev=PageView&noscript=1"/>
</noscript>    <script type="text/javascript">
  window.addEventListener('load', () => {
      let nowUrl = location.href;
      if (nowUrl.match(/products/)) {
          fbq('track', 'ViewContent', {
            content_ids: window.ShopifyAnalytics.meta.product.id,
            content_type: 'product',
          });
          let dom = window.document.getElementsByName('add')
          dom.onclick = fbq('track', 'AddToCart', {
              content_ids: window.ShopifyAnalytics.meta.product.id,
              content_type: 'product',
              currency: 'JPY',
              value: window.ShopifyAnalytics.meta.product.variants[0].price / 100,
          })
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