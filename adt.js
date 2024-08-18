// Drop existing collections if they exist
db.customers.drop();
db.vehicles.drop();
db.reservations.drop();

// Insert customers into the Customers collection
db.customers.insertMany([
  {
    customerID: 1,
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St, Anytown",
    phone: "555-1234",
    driverLicenseNumber: "DL123456",
    reservations: [
      {
        reservationID: 1,
        reservationDate: ISODate("2024-05-28T00:00:00Z"),
        vehicleID: 1,
        rentalStartDate: ISODate("2024-06-01T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-05T00:00:00Z"),
        totalAmount: 500.0,
        payments: [
          {
            paymentID: 1,
            paymentDate: ISODate("2024-06-01T00:00:00Z"),
            amount: 500.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
      {
        reservationID: 9,
        reservationDate: ISODate("2024-06-03T00:00:00Z"),
        vehicleID: 8,
        rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-20T00:00:00Z"),
        totalAmount: 1500.0,
        payments: [
          {
            paymentID: 9,
            paymentDate: ISODate("2024-06-10T00:00:00Z"),
            amount: 1500.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
    ],
  },
  {
    customerID: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    address: "456 Elm St, Othertown",
    phone: "555-5678",
    driverLicenseNumber: "DL654321",
    reservations: [
      {
        reservationID: 2,
        reservationDate: ISODate("2024-05-28T00:00:00Z"),
        vehicleID: 3,
        rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-15T00:00:00Z"),
        totalAmount: 750.0,
        payments: [
          {
            paymentID: 2,
            paymentDate: ISODate("2024-06-10T00:00:00Z"),
            amount: 750.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
      {
        reservationID: 10,
        reservationDate: ISODate("2024-06-04T00:00:00Z"),
        vehicleID: 10,
        rentalStartDate: ISODate("2024-06-15T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-25T00:00:00Z"),
        totalAmount: 1800.0,
        payments: [
          {
            paymentID: 10,
            paymentDate: ISODate("2024-06-15T00:00:00Z"),
            amount: 1800.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
    ],
  },
  {
    customerID: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    address: "789 Oak St, Anycity",
    phone: "555-9876",
    driverLicenseNumber: "DL987654",
    reservations: [
      {
        reservationID: 3,
        reservationDate: ISODate("2024-05-29T00:00:00Z"),
        vehicleID: 4,
        rentalStartDate: ISODate("2024-06-05T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-08T00:00:00Z"),
        totalAmount: 400.0,
        payments: [
          {
            paymentID: 3,
            paymentDate: ISODate("2024-06-05T00:00:00Z"),
            amount: 400.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
      {
        reservationID: 6,
        reservationDate: ISODate("2024-05-31T00:00:00Z"),
        vehicleID: 6,
        rentalStartDate: ISODate("2024-06-15T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-20T00:00:00Z"),
        totalAmount: 1000.0,
        payments: [
          {
            paymentID: 6,
            paymentDate: ISODate("2024-06-15T00:00:00Z"),
            amount: 1000.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
    ],
  },
  {
    customerID: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    address: "321 Pine St, Anothercity",
    phone: "555-4321",
    driverLicenseNumber: "DL456789",
    reservations: [
      {
        reservationID: 4,
        reservationDate: ISODate("2024-05-30T00:00:00Z"),
        vehicleID: 5,
        rentalStartDate: ISODate("2024-06-02T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-07T00:00:00Z"),
        totalAmount: 600.0,
        payments: [
          {
            paymentID: 4,
            paymentDate: ISODate("2024-06-02T00:00:00Z"),
            amount: 600.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
      {
        reservationID: 7,
        reservationDate: ISODate("2024-06-01T00:00:00Z"),
        vehicleID: 7,
        rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-15T00:00:00Z"),
        totalAmount: 800.0,
        payments: [
          {
            paymentID: 7,
            paymentDate: ISODate("2024-06-10T00:00:00Z"),
            amount: 800.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
    ],
  },
  {
    customerID: 5,
    name: "Charlie Green",
    email: "charlie@example.com",
    address: "654 Cedar St, Yetanothercity",
    phone: "555-8765",
    driverLicenseNumber: "DL789456",
    reservations: [
      {
        reservationID: 5,
        reservationDate: ISODate("2024-05-30T00:00:00Z"),
        vehicleID: 2,
        rentalStartDate: ISODate("2024-06-03T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-09T00:00:00Z"),
        totalAmount: 700.0,
        payments: [
          {
            paymentID: 5,
            paymentDate: ISODate("2024-06-03T00:00:00Z"),
            amount: 700.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
      {
        reservationID: 8,
        reservationDate: ISODate("2024-06-02T00:00:00Z"),
        vehicleID: 9,
        rentalStartDate: ISODate("2024-06-05T00:00:00Z"),
        rentalEndDate: ISODate("2024-06-12T00:00:00Z"),
        totalAmount: 1200.0,
        payments: [
          {
            paymentID: 8,
            paymentDate: ISODate("2024-06-05T00:00:00Z"),
            amount: 1200.0,
            paymentMethod: "Credit Card",
          },
        ],
      },
    ],
  },
]);

// Insert vehicles into the Vehicles collection
db.vehicles.insertMany([
  {
    vehicleID: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    registrationNumber: "ABC123",
    availabilityStatus: "Available",
    category: { categoryID: 1, categoryName: "Economy" },
  },
  {
    vehicleID: 2,
    make: "Honda",
    model: "Accord",
    year: 2021,
    registrationNumber: "DEF456",
    availabilityStatus: "Unavailable",
    category: { categoryID: 2, categoryName: "VIP" },
  },
  {
    vehicleID: 3,
    make: "Ford",
    model: "Fusion",
    year: 2020,
    registrationNumber: "GHI789",
    availabilityStatus: "Available",
    category: { categoryID: 1, categoryName: "Economy" },
  },
  {
    vehicleID: 4,
    make: "Chevrolet",
    model: "Malibu",
    year: 2023,
    registrationNumber: "JKL012",
    availabilityStatus: "Available",
    category: { categoryID: 3, categoryName: "VVIP" },
  },
  {
    vehicleID: 5,
    make: "Nissan",
    model: "Altima",
    year: 2019,
    registrationNumber: "MNO345",
    availabilityStatus: "Unavailable",
    category: { categoryID: 2, categoryName: "VIP" },
  },
  {
    vehicleID: 6,
    make: "Toyota",
    model: "Coaster",
    year: 2024,
    registrationNumber: "XYZ123",
    availabilityStatus: "Available",
    category: { categoryID: 3, categoryName: "VVIP" },
    seatingCapacity: 50,
    busType: "Coach",
  },
  {
    vehicleID: 7,
    make: "Ford",
    model: "Transit",
    year: 2023,
    registrationNumber: "ABC456",
    availabilityStatus: "Unavailable",
    category: { categoryID: 1, categoryName: "Economy" },
    seatingCapacity: 30,
    busType: "Shuttle",
  },
  {
    vehicleID: 8,
    make: "Mercedes-Benz",
    model: "Sprinter",
    year: 2023,
    registrationNumber: "DEF789",
    availabilityStatus: "Unavailable",
    category: { categoryID: 2, categoryName: "VIP" },
    seatingCapacity: 40,
    busType: "Touring",
  },
  {
    vehicleID: 9,
    make: "Volvo",
    model: "VHD",
    year: 2022,
    registrationNumber: "GHI012",
    availabilityStatus: "Available",
    category: { categoryID: 1, categoryName: "Economy" },
    seatingCapacity: 60,
    busType: "Charter",
  },
  {
    vehicleID: 10,
    make: "Scania",
    model: "Touring",
    year: 2022,
    registrationNumber: "JKL345",
    availabilityStatus: "Unavailable",
    category: { categoryID: 3, categoryName: "VVIP" },
    seatingCapacity: 70,
    busType: "Luxury",
  },
]);

// Insert reservations into the Reservations collection
db.reservations.insertMany([
  {
    reservationID: 1,
    reservationDate: ISODate("2024-05-28T00:00:00Z"),
    customer: { customerID: 1, name: "John Doe" },
    vehicle: {
      vehicleID: 1,
      make: "Toyota",
      model: "Camry",
      registrationNumber: "ABC123",
    },
    rentalStartDate: ISODate("2024-06-01T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-05T00:00:00Z"),
    totalAmount: 500.0,
  },
  {
    reservationID: 2,
    reservationDate: ISODate("2024-05-28T00:00:00Z"),
    customer: { customerID: 2, name: "Jane Smith" },
    vehicle: {
      vehicleID: 3,
      make: "Ford",
      model: "Fusion",
      registrationNumber: "GHI789",
    },
    rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-15T00:00:00Z"),
    totalAmount: 750.0,
  },
  {
    reservationID: 3,
    reservationDate: ISODate("2024-05-29T00:00:00Z"),
    customer: { customerID: 3, name: "Bob Johnson" },
    vehicle: {
      vehicleID: 4,
      make: "Chevrolet",
      model: "Malibu",
      registrationNumber: "JKL012",
    },
    rentalStartDate: ISODate("2024-06-05T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-08T00:00:00Z"),
    totalAmount: 400.0,
  },
  {
    reservationID: 4,
    reservationDate: ISODate("2024-05-30T00:00:00Z"),
    customer: { customerID: 4, name: "Alice Brown" },
    vehicle: {
      vehicleID: 5,
      make: "Nissan",
      model: "Altima",
      registrationNumber: "MNO345",
    },
    rentalStartDate: ISODate("2024-06-02T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-07T00:00:00Z"),
    totalAmount: 600.0,
  },
  {
    reservationID: 5,
    reservationDate: ISODate("2024-05-30T00:00:00Z"),
    customer: { customerID: 5, name: "Charlie Green" },
    vehicle: {
      vehicleID: 2,
      make: "Honda",
      model: "Accord",
      registrationNumber: "DEF456",
    },
    rentalStartDate: ISODate("2024-06-03T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-09T00:00:00Z"),
    totalAmount: 700.0,
  },
  {
    reservationID: 6,
    reservationDate: ISODate("2024-05-31T00:00:00Z"),
    customer: { customerID: 3, name: "Bob Johnson" },
    vehicle: {
      vehicleID: 6,
      make: "Toyota",
      model: "Coaster",
      registrationNumber: "XYZ123",
    },
    rentalStartDate: ISODate("2024-06-15T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-20T00:00:00Z"),
    totalAmount: 1000.0,
  },
  {
    reservationID: 7,
    reservationDate: ISODate("2024-06-01T00:00:00Z"),
    customer: { customerID: 4, name: "Alice Brown" },
    vehicle: {
      vehicleID: 7,
      make: "Ford",
      model: "Transit",
      registrationNumber: "ABC456",
    },
    rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-15T00:00:00Z"),
    totalAmount: 800.0,
  },
  {
    reservationID: 8,
    reservationDate: ISODate("2024-06-02T00:00:00Z"),
    customer: { customerID: 5, name: "Charlie Green" },
    vehicle: {
      vehicleID: 9,
      make: "Volvo",
      model: "VHD",
      registrationNumber: "GHI012",
    },
    rentalStartDate: ISODate("2024-06-05T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-12T00:00:00Z"),
    totalAmount: 1200.0,
  },
  {
    reservationID: 9,
    reservationDate: ISODate("2024-06-03T00:00:00Z"),
    customer: { customerID: 1, name: "John Doe" },
    vehicle: {
      vehicleID: 8,
      make: "Mercedes-Benz",
      model: "Sprinter",
      registrationNumber: "DEF789",
    },
    rentalStartDate: ISODate("2024-06-10T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-20T00:00:00Z"),
    totalAmount: 1500.0,
  },
  {
    reservationID: 10,
    reservationDate: ISODate("2024-06-04T00:00:00Z"),
    customer: { customerID: 2, name: "Jane Smith" },
    vehicle: {
      vehicleID: 10,
      make: "Scania",
      model: "Touring",
      registrationNumber: "JKL345",
    },
    rentalStartDate: ISODate("2024-06-15T00:00:00Z"),
    rentalEndDate: ISODate("2024-06-25T00:00:00Z"),
    totalAmount: 1800.0,
  },
]);

db.reservations.aggregate([
  {
    $lookup: {
      from: "customers",
      localField: "customer.customerID",
      foreignField: "customerID",
      as: "customer_info",
    },
  },
  {
    $unwind: "$customer_info", // unwind the array created by $lookup
  },
  {
    $lookup: {
      from: "vehicles",
      localField: "vehicle.vehicleID",
      foreignField: "vehicleID",
      as: "vehicle_info",
    },
  },
  {
    $unwind: "$vehicle_info", // unwind the array created by $lookup
  },
  {
    $match: {
      "vehicle_info.availabilityStatus": "Available", // Restriction on available vehicles
    },
  },
  {
    $project: {
      _id: 0,
      reservationID: 1,
      reservationDate: 1,
      customer_info: {
        customerID: 1,
        name: 1,
        email: 1,
      },
      vehicle_info: {
        vehicleID: 1,
        make: 1,
        model: 1,
        year: 1,
        registrationNumber: 1,
      },
    },
  },
]);

db.reservations.aggregate([
  {
    $match: {
      "customer.customerID": 1, // Replace with the customer ID you want to query
    },
  },
  {
    $project: {
      _id: 0,
      reservationID: 1,
      reservationDate: 1,
      amount: { $literal: null }, // Add null value for amount to align with payments schema
      paymentType: { $literal: null }, // Add null value for paymentType to align with payments schema
    },
  },
  {
    $unionWith: {
      coll: "payments",
      pipeline: [
        {
          $match: {
            reservationID: { $exists: true }, // Ensure only payments are considered
            customerID: 1, // Replace with the customer ID you want to query
          },
        },
        {
          $project: {
            _id: 0,
            reservationID: 1,
            paymentDate: "$date", // Assuming payments have a date field
            amount: 1,
            paymentType: 1,
          },
        },
      ],
    },
  },
]);

db.vehicles.aggregate([
  {
    $lookup: {
      from: "reservations",
      localField: "vehicleID",
      foreignField: "vehicle.vehicleID",
      as: "reservations",
    },
  },
  {
    $project: {
      _id: 0,
      vehicleID: 1,
      make: 1,
      model: 1,
      year: 1,
      reservations: {
        reservationID: 1,
        reservationDate: 1,
        rentalStartDate: 1,
  
  
  
  
  
  
  
  
  
  
  
        rentalEndDate: 1,
        totalAmount: 1,
      },
    },
  },
]);

db.reservations.aggregate([
  {
    $match: {
      $or: [
        {
          rentalStartDate: {
            $gte: ISODate("2024-06-01T00:00:00.000Z"),
            $lte: ISODate("2024-06-15T23:59:59.999Z"),
          },
        }, // Rental start date within the range
        {
          rentalEndDate: {
            $gte: ISODate("2024-06-01T00:00:00.000Z"),
            $lte: ISODate("2024-06-15T23:59:59.999Z"),
          },
        }, // Rental end date within the range
        {
          $and: [
            { rentalStartDate: { $lte: ISODate("2024-06-01T00:00:00.000Z") } },
            { rentalEndDate: { $gte: ISODate("2024-06-15T23:59:59.999Z") } },
          ],
        }, // Rental spans the range
      ],
    },
  },
  {
    $project: {
      _id: 0,
      reservationID: 1,
      reservationDate: 1,
      rentalStartDate: 1,
      rentalEndDate: 1,
      totalAmount: 1,
    },
  },
]);

db.vehicles.aggregate([
  {
    $group: {
      _id: { make: "$make", model: "$model" }, // Group by make and model
      totalVehicles: { $sum: 1 }, // Count the number of vehicles for each make and model
      averageYear: { $avg: "$year" }, // Calculate the average year for each make and model
    },
  },
  \{
    $project: {
      _id: 0,
      make: "$_id.make",
      model: "$_id.model",
      totalVehicles: 1,
      averageYear: { $round: ["$averageYear", 2] }, // Round the average year to two decimal places
    },
  },
  { $sort: { totalVehicles: -1 } }, // Sort the results by totalVehicles in descending order
]);
