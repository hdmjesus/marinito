import { Filter } from '@/components/organisms/Filters'
import { FilterList } from '@/components/molecules/FilterList'

export const FilterSearch: React.FC = (): React.ReactElement => {
  return (
    <Filter>
      <FilterList
        data={[
          'Todos',
          'Sedan',
          'SUV',
          'Hatchback',
          'Coupe',
          'Convertible',
          'Wagon',
          'Minivan',
          'Pickup',
          'Hybrid',
          'Electric',
          'Diesel',
          'Crossover',
          'Luxury'
        ]}
      />
      <FilterList
        data={['Todos', 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]}
      />
      <FilterList data={['Todos', 'Disponibles', 'No disponibles']} />
    </Filter>
  )
}
