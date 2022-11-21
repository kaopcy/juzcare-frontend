import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// hooks
import usePreventFirstEffect from '@/hooks/usePreventFirstEffect';
import { useFormContext } from 'react-hook-form';
import { useQuery } from '@apollo/client';
import { LocationGQL } from '@/graphql/report.gql';
// components
import Icon from '@/components/Icon';
import Select from 'react-select';

CreateReportSelectLocation.propTypes = {
   methods: PropTypes.object,
};

function CreateReportSelectLocation({ methods }) {
   const { data, loading, error: queryError } = useQuery(LocationGQL);
   const locationsList = useMemo(() => data?.getAllLocations ?? [], [data]);

   // custom tags error set value to main form state
   const { getFieldState } = useFormContext();
   const { error } = getFieldState('location', methods.formState);

   const [selectedLocation, setSelectedLocation] = useState('');

   usePreventFirstEffect(() => {
      methods.setValue('location', selectedLocation);
      methods.trigger('location');
   }, [selectedLocation, methods]);

   const locationOption = useMemo(
      () =>
         data?.getAllLocations.map((location) => ({
            value: location._id,
            label: location.name,
         })),
      [data],
   );

   const onSelectLocation = (e) => {
      if (e) setSelectedLocation(e.value);
      else setSelectedLocation('');
   };

   return (
      <div className="relative w-full">
         <Select
            classNamePrefix='react-select'
            instanceId="react-select-2-live-region"
            defaultValue={locationOption?.[0]}
            placeholder="สถานที่"
            isClearable={true}
            isSearchable={true}
            name="color"
            options={locationOption}
            onChange={onSelectLocation}
         />
         {/* <select className=" h-10 w-full appearance-none rounded-md border bg-white p-2.5  text-sm text-black shadow-sm outline-none focus:active:border-primary">
            {locationsList.map((location) => (
               <option value={} key={location._id} className="" location="1">
                  {location.name}
               </option>
            ))}
         </select> */}
         {error && <span className="flex-end absolute top-[110%] right-0  text-xs text-error">{error.message}</span>}
      </div>
   );
}

export default CreateReportSelectLocation;
