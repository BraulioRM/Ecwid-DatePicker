//Ecwid Javascript


//Example of custom JavaScript to modify storefront

/*
 * Show a promo 'Free shipping' message on the cart page. 
 * In the example below, users will see a message on the cart page 
 * informing them that they will qualify for free shipping if their 
 * order is more than $99
 */

var promoMessage = "Orders $99 and up ship free!";
var minSubtotal = 99;
var widgets;

// Calculating subtotal and displaying the message
var checkSubtotal = function(order) {
  if (order) {
    var subtotal = order.total - order.shipping;
    if (subtotal > minSubtotal) {
      alert(promoMessage);
    }  
  }
}

// Detecting whether we're on the cart page and get the cart info
Ecwid.OnPageLoaded.add(function(page) {
  widgets = Ecwid.getInitializedWidgets();

  // if storefront widget is present on this page
  for (i = 0; i < widgets.length ; i++) {
    if (widgets[i] == "ProductBrowser") {
      if ('CART' == page.type) {
        Ecwid.Cart.calculateTotal(function(order) {
          checkSubtotal(order);
        });
      }
    }
  }
});

// Get color value for the message and store it in color variable
var color = Ecwid.getAppPublicConfig(appId);

// your code here
// ...

    // Customize time and date selection for order pickup datepicker
    ec.order.extraFields.pickup_time_select = {
        'title': 'Select date of pickup',
        'required': true,
        'type': 'datetime',
        'checkoutDisplaySection': 'pickup_details',
        'orderDetailsDisplaySection': 'order_comments',
        // Default date picker presets
        'datePickerOptions': {
            'minDate': new Date(new Date().getTime() + 2*60*60*1000), // Order is prepared for 2 hours minimum. Hiding 2 hours from the current time. Default is 0
            'maxDate': new Date(2020, 12, 31),
            'showTime': true,
            'incrementMinuteBy': 30,
            // limit available hours for each week day
            'limitAvailableHoursWeekly': {
                'MON': [
                    ['08:30', '13:30'],
                    ['14:00', '17:30']
                ],
                'TUE': [
                    ['14:00', '17:30']
                ],
                'WED': [
                    ['01:00', '13:30']
                ],
                'THU': [
                    ['14:00', '23:30']
                ],
                'FRI': [
                    ['14:00', '17:30']
                ]
            }
        }
    };

Ecwid.refreshConfig(); 