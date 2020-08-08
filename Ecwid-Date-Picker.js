<script type="text/javascript" src="http://app.ecwid.com/script.js?1045450" charset="utf-8"></script>
<script type="text/javascript">
//Ecwid Javascript

Ecwid.OnPageLoaded.add(function(page) {
      
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
});
</script>

<div id="cart-text" style="display:none;"><h3>Whoo-hoo! We're on the cart page.</h3> </div>
