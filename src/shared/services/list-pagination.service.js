App.service('listPagination', function () {

    function Pagination (page, serverListSize) {
        var self = this;

        var initialPage = 0;
        var maxPagesToShow = 0;
        var lastPage = 0;

        function fillGrid(grid, filter, page) {
            grid.fill(filter, page).then(function() {
                self.generate(page, grid.serverListSize);
                debug('paging generated');
            }).catch(function(error) {
                throw (error);
            });
        }

        self.serverListSize = 0;
        self.numPages = [];
        self.currentPage = 0;
        self.numPerPage = 0;
        self.lastPage = 0;
        self.isVisible = false;

        self.generate = function(page, serverListSize) {
            debug('page: '+page);
            debug('serverListSize:'+serverListSize);

            var numPages2 = 0;

            self.currentPage = page;
            self.serverListSize = serverListSize;
            lastPage = self.numPages[self.numPages.length - 1];

            self.isVisible = (self.serverListSize) && (self.numPerPage < self.serverListSize);

            if (page > 3 && maxPagesToShow <= lastPage)
                initialPage = page - 3;
            else
                initialPage = 1;
            
            if (Math.ceil(self.serverListSize / self.numPerPage) > 0)
                self.lastPage = Math.ceil(self.serverListSize / self.numPerPage);
            
            if ((initialPage + maxPagesToShow) < Math.ceil(self.serverListSize / self.numPerPage))
                numPages2 = initialPage + maxPagesToShow;
            else
                numPages2 = Math.ceil(self.serverListSize / self.numPerPage);

            self.numPages = [];
            for (i = initialPage; i <= numPages2; i++) {
                self.numPages.push(i);
            }

            debug('numPages: '+self.numPages);
        };

        self.gotoToFirstDisabled = function() {
            return self.currentPage == 1;
        };

        self.goToPreviousDisabled = function() {
            return self.currentPage == 1;
        };

        self.goToActive = function(page) {
            return self.currentPage == page;
        };

        self.goToNextDisabled = function() {
            return self.currentPage == self.lastPage;
        };

        self.goToLastDisabled = function() {
            return self.currentPage == self.lastPage;
        };

        self.goToFirst = function(grid, filter) {
            if(self.currentPage == 1) { return; }
            var page = 1;
            fillGrid(grid, filter, page);
            debug('goToFirst() executed');
        };

        self.goToPrevious = function(grid, filter) {
            if(self.currentPage == 1) { return; }
            var page = self.currentPage -1;
            fillGrid(grid, filter, page);
            debug('goToPrevious() executed');
        };

        self.goTo = function(grid, filter, page) {
            fillGrid(grid, filter, page);
            debug('goTo() executed');
        };

        self.goToNext = function(grid, filter) {
            if(self.currentPage == self.lastPage) { return; }
            var page = self.currentPage +1;
            fillGrid(grid, filter, page);
            debug('goToNext() executed');
        };

        self.goToLast = function(grid, filter) {
            if(self.currentPage == self.lastPage) { return; }
            var page = self.lastPage;
            fillGrid(grid, filter, page);
            debug('goToLast() executed');
        };

        !function init() {
            self.numPerPage = Config.QuantidadeRegistroPorPagina;
            self.lastPage = 1;

            initialPage = 1;
            maxPagesToShow = 10;
        } ();
        
    }

    this.createPagination = function(page, serverListSize) {
        var pagination = new Pagination();
        pagination.generate(page, serverListSize);
        return pagination;
    }

});