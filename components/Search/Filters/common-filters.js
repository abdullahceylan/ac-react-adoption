const commonFilters = {
  size: {
    name: 'size',
    label: 'Size',
    display: true,
    options: [
      {
        value: 'Small',
        label: 'Small',
        long_label: 'Small',
        default: false,
      },
      {
        value: 'Medium',
        label: 'Medium',
        long_label: 'Medium',
        default: false,
      },
      {
        value: 'Large',
        label: 'Large',
        long_label: 'Large',
        default: false,
      },
      {
        value: 'Extra Large',
        label: 'XL',
        long_label: 'XL',
        default: false,
      },
    ],
  },
  gender: {
    name: 'gender',
    label: 'Genders',
    display: true,
    options: [
      {
        value: 'Male',
        label: 'Male',
        long_label: 'Male',
        default: false,
      },
      {
        value: 'Female',
        label: 'Female',
        long_label: 'Female',
        default: false,
      },
    ],
  },
  distance: {
    name: 'distance',
    label: 'Distance',
    display: true,
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
