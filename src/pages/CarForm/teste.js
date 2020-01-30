<select>
  <option>Selecione a Montadora do Veículo</option>
  {brands
    ? brands.map(brand => (
        <option key={brand.id} value={brand.name}>
          {brand.name}
        </option>
      ))
    : []}
</select>;

brand: Yup.string().required('A Montadora é obrigatória'),
