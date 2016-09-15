openerp.web_duplicate_visibility = function(instance, local) {
    "use strict";

    var _t = instance.web._t;

    instance.web.FormView.include({
        /**
         * Instantiate and render the sidebar if a sidebar is requested
         * Sets this.sidebar
         * @param {jQuery} [$node] a jQuery node where the sidebar should be inserted
         * $node may be undefined, in which case the FormView inserts the sidebar in a
         * div of its template
         **/
        render_sidebar: function($node) {
            var res = this._super.apply(this, arguments);
            if (this.sidebar) {
                if(!this.is_action_enabled('duplicate') &&
                   this.sidebar.items.hasOwnProperty('other')){
                    this.sidebar.items.other = this.sidebar.items.other.filter(
                        function(item){
                            return item.label !== _t("Duplicate");
                        }
                    );
                    this.sidebar.redraw();
                }
            }
            return res;
        },
    });

};
