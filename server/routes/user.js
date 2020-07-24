const express = require("express");
const router = express.Router({ mergeParams: true });

const mockedData = [{
    user_uuid: "ba405586-3a7f-484b-b5c0-5d1cf5cd9c0e",
    first_name: "John",
    last_name: "Doe"
  }, {
    user_uuid: "ce0d0300-716b-4ba8-8f2f-d01d1c2576a4",
    first_name: "Jan",
    last_name: "Nowak"
  }, {
    user_uuid: "9aa4dc78-cdc5-11ea-87d0-0242ac130003",
    first_name: "Joe",
    last_name: "Foo"
  }, {
    user_uuid: "9e3cd552-cdc5-11ea-87d0-0242ac130003",
    first_name: "Jan",
    last_name: "Kowalski"
  }, {
    user_uuid: "a1392364-cdc5-11ea-87d0-0242ac130003",
    first_name: "Sam",
    last_name: "Brown"
  }
];

router.get("/", (req, res, next) => {
  const {id } = req.params;
  const user = mockedData.find(row => row.user_uuid === id);

  if(user) {
    res.json(user);
  } else {
    res.status(404).json({});
  }

});

module.exports = router;