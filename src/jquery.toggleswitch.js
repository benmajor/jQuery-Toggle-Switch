/*!
 * jQuery Toggle Switch
 * by Ben Major
 *
 * Copyright 2017, Ben Major
 * Licensed under the MIT License:
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */

"use strict";

(function( $ ) {
 
    $.fn.toggleSwitch = function( opts, value )
    {
        // Permitted themes:
        var themes = [ 'default', 'square', 'outline' ],
            sizes  = [ 'medium', 'small', 'large', 'xlarge' ];
            
        if( typeof opts == 'object' || opts == undefined )
        {
            var settings = $.extend({
                bindLabel: true,
                className: 'jq-toggle-switch',
                theme:     'default',
                size:      'medium'
            }, opts);
            
            // Loop over them:
            this.filter('input[type="checkbox"]').not( settings.className ).each(function() {
                
                var $toggle = $('<div class="jq-toggle-switch" />' ),
                    id      = $(this).attr('id');
                    
                $toggle.append( '<span class="jq-toggle-button" />' )
                       .data('checkbox', $(this) )
                       .insertBefore( $(this) );
                
                $(this).appendTo($toggle);
                
                if( $(this).is(':checked') )
                {
                    $toggle.addClass('checked');
                }
                
                // Add the theme class:
                if( settings.theme != 'default' && $.inArray(settings.theme, themes) )
                {
                    $toggle.data('theme', settings.theme);
                    
                    if( settings.theme == 'square-outline' )
                    {
                        $toggle.addClass('jq-toggle-switch-theme-square');
                        $toggle.addClass('jq-toggle-switch-theme-outline');
                    }
                    else
                    {
                        $toggle.addClass('jq-toggle-switch-theme-'+settings.theme);
                    }
                }
                
                // Set the size:
                if( settings.size == 'small' || settings.size == 'large' || settings.size == 'xlarge' )
                {
                    $toggle.data('size', settings.size);
                    $toggle.addClass('jq-toggle-switch-size-'+settings.size);
                }
                
                if( id != undefined )
                {
                    var $label = $('label[for="'+id+'"]');
                    $toggle.attr('id', 'toggle_'+id);
                    
                    // If there's a label:
                    if( $label.length && settings.bindLabel )
                    {
                        $label.on('click', function(e) { e.preventDefault(); $toggle.data('checkbox').toggleSwitch('toggle'); });
                    }
                }
                
                $(this).data('toggle', $toggle);
                
                // Handle the checking:
                $toggle.on('click', function() { $(this).data('checkbox').toggleSwitch('toggle'); });
            });
        }
        
        else if( typeof opts == 'string' && this.data('toggle') )
        {
            this.each(function() {
                
                var $toggle = $(this).data('toggle');
            
                // Make sure it's valid:
                switch( opts )
                {
                    // Check the toggle switch:
                    case 'check':
                        $toggle.addClass('checked').data('checkbox').attr('checked', true).trigger('change');
                        break;
                    
                    // Uncheck the toggle switch:
                    case 'uncheck':
                        $toggle.removeClass('checked').data('checkbox').removeAttr('checked').trigger('change');
                        break;
                    
                    // Toggle the toggle switch:
                    case 'toggle':
                        $toggle.toggleClass('checked');
                        
                        if( $toggle.hasClass('checked') )
                        {
                            $toggle.data('checkbox').attr('checked', true);
                        }
                        else
                        {
                            $toggle.data('checkbox').removeAttr('checked');
                        }
                        
                        $toggle.data('checkbox').trigger('change');
                        break;
                    
                    // Check if the element is checked:
                    case 'checked':
                        return $toggle.hasClass('checked');
                        break;
                    
                    // Set the size:
                    case 'setSize':
                        if( $.inArray(value, sizes) )
                        {
                            if( $toggle.data('size') )
                            {
                                $toggle.removeClass('jq-toggle-switch-size-'+$toggle.data('size'));
                            }
                            
                            $toggle.addClass('jq-toggle-switch-size-'+value);
                            $toggle.data('size', value);
                        }
                        else
                        {
                            (console.error || console.log).call(console, 'Invalid size specified.');
                        }
                        break;
                    
                    // Set the theme:
                    case 'setTheme':
                        if( $.inArray(value, themes) )
                        {
                            if( $toggle.data('theme') )
                            {
                                if( $toggle.data('theme') == 'square-outline' )
                                {
                                    $toggle.removeClass('jq-toggle-switch-theme-square');
                                    $toggle.removeClass('jq-toggle-switch-theme-outline');
                                }
                                else
                                {
                                    $toggle.removeClass('jq-toggle-switch-theme-'+$toggle.data('theme'));
                                }
                            }
                            
                            if( value == 'square-outline' )
                            {
                                $toggle.addClass('jq-toggle-switch-theme-square');
                                $toggle.addClass('jq-toggle-switch-theme-outline');
                            }
                            else
                            {
                                $toggle.addClass('jq-toggle-switch-theme-'+value);
                            }
                            
                            $toggle.data('theme', value);
                        }
                        else
                        {
                            (console.error || console.log).call(console, 'Invalid theme specified.');
                        }
                        break;
                    
                    // Destory the toggle switch:
                    case 'destroy':
                        $toggle.data('checkbox').insertBefore( $toggle );
                        $toggle.remove();
                        break;
                    
                    // Throw an error since it does not exist:
                    default:
                        (console.error || console.log).call(console, 'Invalid function name provided.');
                        break;
                }
            });
        }
        
        return this;
 
    };
 
} (jQuery));
