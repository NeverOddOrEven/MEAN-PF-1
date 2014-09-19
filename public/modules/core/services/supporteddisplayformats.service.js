'use strict';

//Menu service used for managing  menus
angular.module('core').service('SupportedDisplayFormats', [
	function() {
        function OneColumn(columns) {
            var markup = '';
            
            var count = 0;
            columns.forEach(function() {
                markup = markup + '<div class="row"><div class="col-12">' + columns[count] + '</div></div>';
                ++count;
            });
            
            return markup;
        }
        
        function TwoColumn(columns) {
            var markup = '';
            
            var count = 0;
            columns.forEach(function() {
                var onNewRow = (count % 2) === 0;
                var endRow = (count % 2) === 1 || count === columns.length;
                
                markup = onNewRow ? markup + '<div class="row">' : markup;
                markup = markup + '<div class="col-6">' + columns[count] + '</div>';
                markup = endRow ? markup + '</div>' : markup;
                
                ++count;
            });
            
            console.info(markup);
            return markup;
        }
        
        function ThreeColumn(columns) {
            var markup = '';
            
            var count = 0;
            columns.forEach(function() {
                var onNewRow = (count % 3) === 0;
                var endRow = (count % 3) === 2 || count === columns.length;
                
                markup = onNewRow ? markup + '<div class="row">' : markup;
                markup = markup + '<div class="col-4">' + columns[count] + '</div>';
                markup = endRow ? markup + '</div>' : markup;
                
                ++count;
            });
            
            return markup;
        }
        
        return {
            OneColumnFormat: OneColumn,
            TwoColumnFormat: TwoColumn,
            ThreeColumnFormat: ThreeColumn
        };
    }
]);