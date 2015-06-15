var GETDATA = "SELECT * " + 
               "FROM tabla " +
               "WHERE nombre = ? " +
               "ORDER BY id " +
               "DESC "
               "LIMIT 1 ";
exports.GETDATA = GETDATA;

var SAVEDATA = "INSERT INTO tabla ( " +
                "nombre , apellidos, edad, " +
      "direccion, correo, telefono, celular) " +
      "VALUES (?,?,?,?,?,?,?)";
exports.SAVEDATA = SAVEDATA;