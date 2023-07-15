const data = {
  title: "Unete a nosotros para crear entornos de aprendizaje optimos",
  paragraph:
    "Contáctanos hoy mismo para obtener más información sobre nuestra solución y cómo puede beneficiar a tu institución.",
  inputs: <{ label: string; name: string; type: string }[]>[
    { label: "Nombre*", name: "first" },
    {
      label: "Apellido*",
      name: "last",
    },
    {
      label: "Numero de telefono*",
      name: "phone",
      type: "tel",
    },
    {
      label: "Correo electronico*",
      name: "email",
      type: "email",
    },
    {
      label: "Mensaje*",
      name: "message",
      type: "textarea",
    },
  ],
};

export default data
