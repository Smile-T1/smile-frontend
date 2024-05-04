import {
	Box,
	Progress,
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
} from "@chakra-ui/react";
import { format, startOfWeek, endOfWeek, addDays } from "date-fns";
import React, { useEffect, useState } from "react";

const Schedule = () => {
	const [selectedDay, setSelectedDay] = useState("");
	const currentDate = new Date();
	const startOfCurrentWeek = startOfWeek(currentDate); // Sunday
	const endOfCurrentWeek = endOfWeek(currentDate); // Saturday
	const formattedDate = format(currentDate, "MMMM, yyyy");

	const daysOfWeek = [];
	let currentDatePointer = startOfCurrentWeek;
	while (currentDatePointer <= endOfCurrentWeek) {
		daysOfWeek.push({
			day: format(currentDatePointer, "EEE"),
			date: format(currentDatePointer, "dd"),
		});
		currentDatePointer = addDays(currentDatePointer, 1);
	}
	const steps = [{ date: "" }, { title: "" }, { title: "" }];
	const { activeStep, setActiveStep } = useSteps({
		index: 1,
		count: steps.length,
	});

	return (
		<div className="container mt-8 bg-[#F6F6F6] rounded-lg h-full p-6">
			<div className="bg-[#FFFFFF] p-8">
				<h1 className=" ">Weekly Schedule</h1>
				<h3 className="mt-4 text-lg font-medium">{formattedDate}</h3>

				<div className="flex gap-12 items-center mt-4">
					{daysOfWeek.map((day) => (
						<span
							key={day.day}
							className={`flex flex-col gap-2 items-center w-20 justify-center cursor-pointer ${
								selectedDay == day.day
									? "bg-[#4483FD] shadow-lg rounded-lg p-3 text-white"
									: ""
							}`}
							onClick={() => setSelectedDay((prev) => (prev = day.day))}
						>
							<p>{day.day}</p>
							<p className="font-medium">{day.date}</p>
						</span>
					))}
				</div>
				<Stepper
					index={activeStep}
					orientation="vertical"
					gap="4"
					className="mt-12 h-full"
					colorScheme="green"
				>
					{steps.map((step, index) => (
						<Step key={index} className="w-full h-full">
							<StepIndicator>
								<StepStatus
									complete={<StepIcon />}
									incomplete={<StepNumber />}
									active={<StepNumber />}
								/>
							</StepIndicator>

							<Box className="bg-opacity-[20%] w-full bg-[#3E68FF] p-4 rounded-lg h-full">
								<StepTitle className="text-black">11:00 - 12:00 AM</StepTitle>
								<StepDescription className="flex justify-between">
									<span>Surgery</span>
									<span>Patient Name</span>
								</StepDescription>
							</Box>

							<StepSeparator />
						</Step>
					))}
				</Stepper>
			</div>
		</div>
	);
};

export default Schedule;
