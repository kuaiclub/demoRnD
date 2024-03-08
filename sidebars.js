/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  docs: [
    
    
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        
        'guides/v4-migration',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/accordion',
        
      ],
    },
  ],
  screens: [
    {
      type: 'ref',
      id: 'api/accordion'
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        
        'api/accordion',
        
      ],
    },
  ],
  
  training: [
    {
      "type": "category",
      "label": "Basic tutorials",
      "collapsed": false,
      "items": [
        "training/awe-101",
        
      ]
    }
  ]
};