import React, { useState } from "react";
import styled from "styled-components";

export default function Rate(props) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<RateCard>
			<RateQuest>How did we do?</RateQuest>
			<RatePar>
				Please let us know how we did with your support request. All feedback is
				appreciated to help us improve our offering!
			</RatePar>
			<Btns>
				{stars.map((item) => {
					return (
						<RateBtn
							key={item}
							className="star"
							number={props.number}
							item={item}
							onClick={() => props.setNumber(item)}
						>
							{item}
						</RateBtn>
					);
				})}
			</Btns>
			<SubmitBtn
				onClick={() => {
					if (props.number) {
						props.setSubmit(true);
					}
				}}
			>
				SUBMIT
			</SubmitBtn>
		</RateCard>
	);
}
const RateCard = styled.div`
	padding: 3.2rem;
	background-color: #181e27;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items:center
	text-align: left;
	max-width: 41.6rem;
	width: 100%;
	border-radius: 1.8rem;
	@media (max-width: 450px) {
		max-width: 32.7rem;
		padding: 3.2rem 2.2rem;
	}
`;
const RateQuest = styled.h1`
	font-size: 2.8rem;
	font-weight: 700;
	line-height: 3.5rem;
	letter-spacing: 0px;
	text-align: left;
	color: #ffffff;
`;
const RatePar = styled.p`
	font-size: 1.5rem;
	font-weight: 400;
	line-height: 2.4rem;
	letter-spacing: 0px;
	text-align: left;
	color: #969fad;
	margin: 0.7rem 0 2.4rem;
	@media (max-width: 450px) {
		margin: 1rem 0 2.4rem;
	}
`;
const RateBtn = styled.button`
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.20000000298023224px;
	text-align: center;
	border: none;
	border-radius: 50%;
	padding: 1.3rem 2.2rem;
	background-color: ${(props) =>
		props.number === props.item ? "#FC7614" : "#262E38"};
	color: ${(props) => (props.number === props.item ? "white" : "#7C8798")};

	@media (max-width: 450px) {
		padding: 0.9rem 1.7rem;
	}
`;
const Btns = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 3.2rem;
`;
const SubmitBtn = styled.button`
	background-color: #fc7614;
	color: white;
	border: none;
	border-radius: 2.2rem;
	padding: 1.1rem;
	font-size: 15px;
	font-weight: 700;
	line-height: 19px;
	letter-spacing: 2px;
	text-align: center;
`;
