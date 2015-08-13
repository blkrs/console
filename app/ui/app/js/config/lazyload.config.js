/**
 * Copyright (c) 2015 Intel Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function () {
    "use strict";

    App.config(['$ocLazyLoadProvider', 'LazyLoadConfig', function ($ocLazyLoadProvider, LazyLoadConfig) {
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: LazyLoadConfig.modules
        });
    }])
    .constant('LazyLoadConfig', {
        modules: [
            {
                name: 'xeditable',
                files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                        'vendor/angular-xeditable/dist/css/xeditable.css']
            }
        ],
        standalones: [
            {
                name: 'modernizr',
                files: ['vendor/modernizr/modernizr.js']
            }, {
                name: 'icons',
                files: ['vendor/fontawesome/css/font-awesome.min.css',
                        'vendor/simple-line-icons/css/simple-line-icons.css']
            }, {
                name: 'parsley',
                files: ['vendor/parsleyjs/dist/parsley.min.js']
            }, {
                name: 'amcharts-serial',
                files: ['vendor/amcharts/dist/amcharts/amcharts.js',
                        'vendor/amcharts/dist/amcharts/serial.js'],
                serie: true
            }, {
                name: 'highlightjs',
                files: ['vendor/highlightjs/highlight.pack.js',
                        'vendor/highlightjs/styles/github.css']
            }
        ]
    });

})();
