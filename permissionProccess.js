const permission = [
  {
    id: "fb548656-d314-40e9-9022-f5ca62a32f66",
    name: "bandwidth",
    compositeRoles: [],
    permissionModel: {
      canView: true,
      canCreate: false,
      canEdit: true,
      canDelete: false,
    },
  },
  {
    id: "49081498-230c-440e-a036-9962792ea78d",
    name: "HR",
    compositeRoles: [
      {
        id: "0498b9ba-924f-4cb9-bedb-72ce9e702593",
        name: "can_view_bandwidth",
        compositeRoles: null,
        permissionModel: null,
      },
    ],
    permissionModel: {
      canView: true,
      canCreate: true,
      canEdit: false,
      canDelete: false,
    },
  },
  {
    id: "31df5eae-df6d-45af-88d3-49c5300e8994",
    name: "bandwidth_buyer_can_view",
    compositeRoles: [],
    permissionModel: {
      canView: false,
      canCreate: true,
      canEdit: false,
      canDelete: true,
    },
  },
];

// [
//     {
//         "2": {
//             "rowIds": [
//                 "fb548656-d314-40e9-9022-f5ca62a32f66",
//                 "49081498-230c-440e-a036-9962792ea78d",
//                 "31df5eae-df6d-45af-88d3-49c5300e8994"
//             ]
//         }
//     },
//     {
//         "3": {
//             "rowIds": [
//                 "fb548656-d314-40e9-9022-f5ca62a32f66",
//                 "49081498-230c-440e-a036-9962792ea78d",
//                 "31df5eae-df6d-45af-88d3-49c5300e8994"
//             ]
//         }
//     }
// ]

// process permission
function convertPermissions(input) {
  const resultMap = {
    2: { rowIds: [] },
    3: { rowIds: [] },
    4: { rowIds: [] },
    5: { rowIds: [] },
  };

  // Iterate through each object in the input array
  input.forEach((item) => {
    const { id, permissionModel } = item;

    // Check permissions and add the ID to the corresponding rowIds

    if (permissionModel.canView) {
      resultMap["2"].rowIds.push(id);
    }
    if (permissionModel.canCreate) {
      resultMap["3"].rowIds.push(id);
    }
    if (permissionModel.canEdit) {
      resultMap["4"].rowIds.push(id);
    }
    if (permissionModel.canDelete) {
      resultMap["5"].rowIds.push(id);
    }
  });

  // Convert the resultMap to the desired array format
  const resultArray = Object.entries(resultMap).map(([key, value]) => ({
    [key]: value,
  }));

  return resultArray;
}

console.dir(convertPermissions(permission));
