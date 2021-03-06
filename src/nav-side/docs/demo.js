angular.module('app').controller('navSideDemoCtrl', function ($scope) {
  var items;

  items = [
    {
      title: 'Single Link',
      type: 'ui-sref',
      ref: '#'
    },
    {
      title: 'Example Accordion Title 1',
      href: null,
      children: [
        {
          title: 'Example 1',
          type: 'ui-sref',
          ref: '#',
          detail: 'Incomplete'
        },
        {
          title: 'Example 2',
          type: 'ui-sref',
          ref: '#'
        },
        {
          title: 'Example 3',
          type: 'ui-sref',
          ref: '#'
        }
      ]
    },
    {
      title: 'Example Accordion Title 2',
      href: null,
      children: [
        {
          title: 'Example 1',
          type: 'scroll-to',
          ref: 'scroll-to-id'
        },
        {
          title: 'Example 2',
          type: 'href',
          ref: '#'
        }
      ]
    }
  ];

  $scope.navItems = items;

});
