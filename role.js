const roleList = [
  {
    id: "31df5eae-df6d-45af-88d3-49c5300e8994",
    name: "bandwidth_buyer_can_view",
    canView: false,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
  {
    id: "49081498-230c-440e-a036-9962792ea78d",
    name: "HR",
    canView: true,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
  {
    id: "fb548656-d314-40e9-9022-f5ca62a32f66",
    name: "bandwidth",
    canView: false,
    canCreate: false,
    canEdit: false,
    canDelete: false,
  },
];

// const selectedIds = [
//   {
//     2: {
//       rowIds: [
//         "fb548656-d314-40e9-9022-f5ca62a32f66",
//         "49081498-230c-440e-a036-9962792ea78d",
//       ],
//     },
//   },
//   {
//     3: {
//       rowIds: [
//         "fb548656-d314-40e9-9022-f5ca62a32f66",
//         "49081498-230c-440e-a036-9962792ea78d",
//         "31df5eae-df6d-45af-88d3-49c5300e8994",
//       ],
//     },
//   },
// ];

const selectedIds2 = [
  {
    columnId: 2,
    rowIds: [
      "fb548656-d314-40e9-9022-f5ca62a32f66",
      "49081498-230c-440e-a036-9962792ea78d",
    ],
  },

  {
    columnId: 3,
    rowIds: [
      "fb548656-d314-40e9-9022-f5ca62a32f66",
      "49081498-230c-440e-a036-9962792ea78d",
      "31df5eae-df6d-45af-88d3-49c5300e8994",
    ],
  },
];

selectedIds2.forEach((item) => {
  item.columnId;
});

const convertedRole = roleList.map((item) => {
  selectedIds2.forEach((i) => {
    if (i.rowIds?.includes(item.id) && i.columnId == 2) {
      item.canView = true;
    }

    if (i.rowIds?.includes(item.id) && i.columnId == 3) {
      item.canCreate = true;
    }

    if (i.rowIds?.includes(item.id) && i.columnId == 4) {
      item.canEdit = true;
    }

    if (i.rowIds?.includes(item.id) && i.columnId == 5) {
      item.canDelete = true;
    }
  });

  return item;
});

console.log(convertedRole);
