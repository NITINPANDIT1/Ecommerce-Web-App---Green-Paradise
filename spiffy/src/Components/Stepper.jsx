import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'
import { useRef, useState } from 'react'

 
  
  function Example({page}) {
     
    const steps = [
        { title: 'Personal Info', description: 'Personal Info' },
        { title: 'Delivery', description: 'Delivery Details' },
        { title: 'Payment', description: 'Payment Details' },
        { title: 'OTP ', description: 'OTP Verification' },
      ]
    // let { activeStep } = useSteps({
       
    //   index: 2,
    //   count: steps.length,
    // })
  
    return (
      <Stepper index={page}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  }
  
 export {Example}