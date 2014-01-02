// Image Select, an extention to the Chosen, a Select Box Enhancer for jQuery and Prototype
// by Adnan Sagar, WebSemantics Inc. http://websemantics.ca & AlterSpark Corp. http://www.alterspark.com/
//
// Version 1.0.0
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2014 WebSemantics http://websemantics.ca

// MIT License, https://github.com/websemantics/Image-Select/blob/master/LICENSE

(function($) {

    // Image template, this can be overridden from the constructor (options.template), 
    // must contains {src} placeholder. Ther eare two class names 'chose-image' or 'chose-image-small', modifiy in CSS
    var fn_template = '<img class="{class_name}" src="{url}" />';

    // Store the original 'chosen' method
    var fn_chosen = $.fn.chosen;

      $.fn.extend({
        // summery:
        //  Extend the original 'chosen' method to support images
        chosen: function(options) {
          
            // original behavior - use function.apply to preserve context
            var ret = fn_chosen.apply(this, arguments);

            var html_template = options.html_template || fn_template;

            this.each(function(input_field) {
                var $this, chosen;

                $this = $(this);
                chosen = $this.data('chosen');

                $this.on("change", function change(evt,selected){
                    // summery
                    //      This function is triggered when the chosen instance has changed, 
                    // evt: Event
                    //      The event object
                    // selected: Object
                    //      Contains the value of the selected
                    //  
                    
                    var options = chosen.form_field.options;

                    if(selected != undefined && selected.selected != undefined && options && options.length){

                        for(var i = 0 ; i < options.length; i++){
                            var option = options[i];
                            var value =  ($(option).attr('value')) ? $(option).attr('value'):$(option).text();
                            var img_src = $(option).attr('data-img-src');

                            if(img_src != undefined && selected.selected == value){
                                var template = html_template.replace('{url}',img_src);

                                // For multiple selection
                                $(chosen.container).find('.chosen-choices span').last().prepend(template.replace('{class_name}','chose-image'));
                                
                                // For single select
                                $(chosen.container).find('.chosen-single span').prepend(template.replace('{class_name}','chose-image-small'));
                            }
                        }
                    }
                });

                $this.on("chosen:showing_dropdown", function change(evt, _chosen){
                    // summery
                    //      This function is triggered when the chosen instance dropdown list becomes visible 
                    //  For Chose custom events: http://forwebonly.com/jquery-chosen-custom-events-and-how-to-use-them/
                    //
                    // evt: Event
                    //      The event object
                    // _chosen: Object {chosen:Chosen}
                    //      Contains the current instance of Chosen class
                    
                    var lis = $(chosen.container).find('.chosen-drop ul li');
                    var options = chosen.form_field.options;

                    for(var i = 0 ; i < lis.length; i++){
                        var li = lis[i];
                        var option = options[i];
                        var img_src = $(option).attr('data-img-src');

                        if(img_src != undefined){
                            var template = html_template.replace('{url}',img_src);
                            $(li).prepend(template.replace('{class_name}','chose-image-list'));
                        }
                    }
                  
                });

                $this.trigger('change');

              });

            return ret;
        }
      });

})(jQuery);
