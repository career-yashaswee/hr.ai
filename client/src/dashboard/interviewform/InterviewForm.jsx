import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { MenuItem, Select, TextField, FormControl, InputLabel, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { DatePicker, TimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './InterviewForm.css';

const InterviewForm = ({ onSubmit }) => {
  const { handleSubmit, control } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit(handleFormSubmit)}>
        <FormControl fullWidth margin="normal">
          <InputLabel id="interviewer-label">Select Interviewer</InputLabel>
          <Controller
            name="interviewer"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select labelId="interviewer-label" {...field}>
                <MenuItem value="Jack">Jack</MenuItem>
                <MenuItem value="Sally">Sally</MenuItem>
                <MenuItem value="Anderson">Anderson</MenuItem>
                <MenuItem value="Sophia">Sophia</MenuItem>

              </Select>
            )}
          />
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel id="scenario-label">Select Job Scenario</InputLabel>
          <Controller
            name="jobScenario"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select labelId="scenario-label" {...field}>
                <MenuItem value="Scenario1">Scenario 1</MenuItem>
                <MenuItem value="Scenario2">Scenario 2</MenuItem>
                <MenuItem value="Scenario3">Scenario 3</MenuItem>
              </Select>
            )}
          />
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Controller
            name="interviewDate"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <DatePicker
                label="Interview Date"
                {...field}
                renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
              />
            )}
          />
          <Controller
            name="interviewTime"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <TimePicker
                label="Interview Time"
                {...field}
                renderInput={(params) => <TextField fullWidth margin="normal" {...params} />}
              />
            )}
          />
        </LocalizationProvider>

        <FormControl component="fieldset" fullWidth margin="normal" className="radio-group">
          <Controller
            name="interviewType"
            control={control}
            defaultValue="voice"
            render={({ field }) => (
              <RadioGroup row {...field}>
                <FormControlLabel value="voice" control={<Radio />} text='white' label="Voice Only" />
                <FormControlLabel value="voiceWithVideo" control={<Radio />} label="Voice/Video" />
              </RadioGroup>
            )}
          />
        </FormControl>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      
    </div>
  );
};

export default InterviewForm;
