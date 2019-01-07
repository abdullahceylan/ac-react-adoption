const commonFilters = {
  size: {
    name: 'size',
    label: 'Size',
    display: true,
    component: 'filter',
    options: [
      {
        value: 'S',
        label: 'Small',
        long_label: 'Small',
        default: false,
      },
      {
        value: 'M',
        label: 'Medium',
        long_label: 'Medium',
        default: false,
      },
      {
        value: 'L',
        label: 'Large',
        long_label: 'Large',
        default: false,
      },
      {
        value: 'XL',
        label: 'Extra Large',
        long_label: 'Extra Large',
        default: false,
      },
    ],
  },
  gender: {
    name: 'sex',
    label: 'Gender',
    display: true,
    component: 'filter',
    options: [
      {
        value: 'M',
        label: 'Male',
        long_label: 'Male',
        default: false,
      },
      {
        value: 'F',
        label: 'Female',
        long_label: 'Female',
        default: false,
      },
    ],
  },
  distance: {
    name: 'distance',
    label: 'Distance',
    display: false,
    component: 'searchbar',
    options: [
      {
        value: '10',
        label: '10 miles',
        long_label: 'Within 10 mi',
        default: false,
      },
      {
        value: '25',
        label: '25 miles',
        long_label: 'Within 25 mi',
        default: false,
      },
      {
        value: '50',
        label: '50 miles',
        long_label: 'Within 50 mi',
        default: false,
      },
      {
        value: '100',
        label: '100 miles',
        long_label: 'Within 100 mi',
        default: true,
      },
      {
        value: 'Anywhere',
        label: 'Anywhere',
        long_label: 'Anywhere',
        default: false,
      },
    ],
  },
  sort: {
    name: 'sort',
    label: 'Sort By',
    display: true,
    component: 'searchbar',
    options: [
      {
        value: 'recently_added',
        label: 'Recently added',
        long_label: 'Recently added',
        default: false,
      },
      {
        value: 'available_longest',
        label: 'Available longest',
        long_label: 'Available longest',
        default: false,
      },
      {
        value: 'nearest',
        label: 'Nearest',
        long_label: 'Nearest',
        default: true,
      },
    ],
  },
};

export default commonFilters;
