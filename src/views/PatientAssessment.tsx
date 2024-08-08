import React from 'react';
import { FormProvider, useForm, useWatch, Controller } from 'react-hook-form';
import { Tabs, Button, DatePicker } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import InputField from "../Components/InputField";
import SelectField from "../Components/SelectField";
import TextAreaField from '../Components/TextAreaField';
import { bloodGroupOptions, drugsAbuseHist, patientMaritalStatus, rwandaLocations } from "../constants";
import dayjs from 'dayjs'; // Import dayjs for date handling

const { TabPane } = Tabs;

function PatientAssessment() {
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      province: 'Select Province',
      district: 'Select District',
      sector: 'Select Sector',
      dateOfBirth: null, // Default value for date of birth
    }
  });
  const { control, setValue, getValues } = methods;
  const navigate = useNavigate();

  const selectedProvince = useWatch({ control, name: 'province' });
  const selectedDistrict = useWatch({ control, name: 'district' });

  const provinces = [{ value: 'Select Province', label: 'Select Province' }, ...rwandaLocations.provinces.map((province) => ({
    value: province.province,
    label: province.province,
  }))];

  const currentProvince = rwandaLocations.provinces.find((p) => p.province === selectedProvince);
  const districts = [{ value: 'Select District', label: 'Select District' }, ...(currentProvince
    ? currentProvince.districts.map((district) => ({
      value: district.district,
      label: district.district,
    }))
    : [])];

  const currentDistrict = currentProvince ? currentProvince.districts.find((d) => d.district === selectedDistrict) : null;
  const sectors = [{ value: 'Select Sector', label: 'Select Sector' }, ...(currentDistrict
    ? currentDistrict.sectors.map((sector) => ({
      value: sector,
      label: sector,
    }))
    : [])];

  const handleSave = () => {
    const formData = getValues();
    localStorage.setItem('patientData', JSON.stringify(formData));
    navigate('/request-consultation'); // Redirect to the request consultation page
  };

  return (
    <FormProvider {...methods}>
      <form className="w-4/6 mt-3">
        <Tabs defaultActiveKey="1">
          <TabPane tab="Patient Information" key="1">
            <InputField label="Full Name" name="fullName" type="text" required />
            <InputField label="ID" name="nationalId" type="text" required />
            <InputField label="Telephone" name="telephone" type="text" required />
            {/* <SelectField label="Blood Group" name="bloodGroup" options={bloodGroupOptions} /> */}
            <SelectField label="Marital Status" name="maritalStatus" options={patientMaritalStatus} />
            <InputField label="Mother Name" name="motherName" type="text" />
            <InputField label="Father Name" name="fatherName" type="text" />
            <InputField label="Insurance Name" name="insuranceName" type="text" />
            <InputField label="Occupation" name="occupation" type="text" />
            <InputField label="Religion" name="religion" type="text" />
            <div className="my-2">
              <p className='font-bold'>Date of Birth</p>
              <Controller
                name="dateOfBirth"
                control={control}
                render={({ field }) => (
                  <DatePicker
                    className="w-full"
                    onChange={(date) => field.onChange(date ? dayjs(date).format('YYYY-MM-DD') : '')}
                    value={field.value ? dayjs(field.value) : null}
                  />
                )}
              />
            </div>
          </TabPane>
          <TabPane tab="Address & Contact" key="2">
            <p className='my-2 font-bold'>Address</p>
            <div>
              <div className="flex gap-3">
                <SelectField
                  label="Province"
                  name="province"
                  options={provinces}
                  onChange={() => {
                    setValue('district', 'Select District');
                    setValue('sector', 'Select Sector');
                  }}
                />
                <SelectField
                  label="District"
                  name="district"
                  options={districts}
                  disabled={selectedProvince === 'Select Province'}
                  onChange={() => setValue('sector', 'Select Sector')}
                />
                <SelectField
                  label="Sector"
                  name="sector"
                  options={sectors}
                  disabled={selectedDistrict === 'Select District'}
                />
              </div>
            </div>
            <p className='my-2 font-bold'>Next of Kin</p>
            <InputField label="Full Name" name="nextofKin" type="text" />
            <InputField label="Telephone" name="nextofKinTelephone" type="text" />
          </TabPane>
          <TabPane tab="Medical History" key="3">
            <TextAreaField label="Previous Illnesses" name="previousIllnesses" placeholder="Previous illnesses" />
            <TextAreaField label="Surgical History" name="surgicalHistory" placeholder="Patient past surgeries" />
            <TextAreaField label="Allergies" name="allergies" placeholder="Allergies" />
            <TextAreaField label="Current Medications" name="currentMedications" placeholder="Current Medications" />
            <p className='my-3 font-bold'>Risk Factors</p>
            <SelectField label="Tobacco consumption" name="tobacoConsumption" options={drugsAbuseHist} />
            <SelectField label="Alcohol consumption" name="alcoholConsumption" options={drugsAbuseHist} />
            <TextAreaField label="Other risk factors" name="otherRiskFactors" placeholder="Other Risk Factors" />
            <div className="mt-4">
              <Button type="primary" onClick={handleSave}>Save and Request Consultation</Button>
            </div>
          </TabPane>
        </Tabs>

      </form>
    </FormProvider>
  );
}

export default PatientAssessment;
