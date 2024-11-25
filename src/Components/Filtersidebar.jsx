import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

export default function FilterSidebar() {
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [selectedResourceTypes, setSelectedResourceTypes] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const departments = ['School of Computing', 'School of Design & Arts', 'School of Business & Liberal Arts', 'Senior High School'];
  const departmentColors = {
    'School of Computing': '#FDD030',
    'School of Design & Arts': '#1EAFEC',
    'School of Business & Liberal Arts': '#EB2543',
    'Senior High School': '#66A6F5',
  };
  const subjects = ['Education', 'Social Sciences', 'Sciences', 'Language & Literature', 'Medicine', 'Library Science', 'Music', 'World History'];
  const resourceTypes = ['Book', '...'];
  const statuses = ['Available', 'Unavailable'];

  const handleSelectionToggle = (setSelected, selected, item) => {
    setSelected(prevSelected =>
      prevSelected.includes(item)
        ? prevSelected.filter(i => i !== item)
        : [...prevSelected, item]
    );
  };

  return (
    <Box sx={{ width: 320, p: 3, bgcolor: '#f7f7f7', borderRadius: 3, border: '2px solid #e0e0e0', boxShadow: 3, mt: 3 }}> {/* Increased mt here */}
      {/* Publication Date */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">Publication Date</Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={5}>
            <TextField size="small" variant="outlined" fullWidth placeholder="From" />
          </Grid>
          <Grid item xs={5}>
            <TextField size="small" variant="outlined" fullWidth placeholder="To" />
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <Button variant="contained" size="small" sx={{ backgroundColor: '#11326F', color: '#fff' }}>GO</Button>
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* School Department */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">School Department</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {departments.map((department) => (
            <Button
              key={department}
              variant={selectedDepartments.includes(department) ? "contained" : "outlined"}
              size="small"
              onClick={() => handleSelectionToggle(setSelectedDepartments, selectedDepartments, department)}
              sx={{
                backgroundColor: selectedDepartments.includes(department) ? departmentColors[department] : 'transparent',
                color: selectedDepartments.includes(department) ? '#fff' : '#000'
              }} 
            >
              {department}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, pr: 2 }}>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#11326F', color: '#fff' }}>GO</Button>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Subject Classification */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">Subject Classification</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {subjects.map((subject) => (
            <Button
              key={subject}
              variant={selectedSubjects.includes(subject) ? "contained" : "outlined"}
              size="small"
              onClick={() => handleSelectionToggle(setSelectedSubjects, selectedSubjects, subject)}
              sx={{ backgroundColor: selectedSubjects.includes(subject) ? '#11326F' : 'transparent', color: selectedSubjects.includes(subject) ? '#fff' : '#000' }} 
            >
              {subject}
            </Button>
          ))}
          <Button variant="outlined" size="small">...</Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, pr: 2 }}>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#11326F', color: '#fff' }}>GO</Button>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Resource Type */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">Resource Type</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {resourceTypes.map((type) => (
            <Button
              key={type}
              variant={selectedResourceTypes.includes(type) ? "contained" : "outlined"}
              size="small"
              onClick={() => handleSelectionToggle(setSelectedResourceTypes, selectedResourceTypes, type)}
              sx={{ backgroundColor: selectedResourceTypes.includes(type) ? '#11326F' : 'transparent', color: selectedResourceTypes.includes(type) ? '#fff' : '#000' }} 
            >
              {type}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, pr: 2 }}>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#11326F', color: '#fff' }}>GO</Button>
        </Box>
      </Box>
      <Divider sx={{ mb: 3 }} />

      {/* Status */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="subtitle1">Status</Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {statuses.map((status) => (
            <Button
              key={status}
              variant={selectedStatus.includes(status) ? "contained" : "outlined"}
              size="small"
              onClick={() => handleSelectionToggle(setSelectedStatus, selectedStatus, status)}
              sx={{ backgroundColor: selectedStatus.includes(status) ? '#11326F' : 'transparent', color: selectedStatus.includes(status) ? '#fff' : '#000' }} 
            >
              {status}
            </Button>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1, pr: 2 }}>
          <Button variant="contained" size="small" sx={{ backgroundColor: '#11326F', color: '#fff' }}>GO</Button>
        </Box>
      </Box>

      <Button variant="contained" fullWidth sx={{ mt: 4, backgroundColor: '#11326F', color: '#fff' }}>SEARCH</Button>
    </Box>
  );
}