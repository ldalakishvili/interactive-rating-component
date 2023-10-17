import React from "react";
import styled from "styled-components";
import img from "../../assets/img.svg";

export default function Result(props) {
	return (
		<ResultCard>
			<Image src={img} />
			<Rating>You selected {props.number} out of 5 </Rating>
			<Thanks>Thank you! </Thanks>
			<ResultText>
				We appreciate you taking the time to give a rating. If you ever need
				more support, don’t hesitate to get in touch!
			</ResultText>
		</ResultCard>
	);
}

const ResultCard = styled.div`
	max-width: 41.6rem;
	width: 100%;
	border-radius: 1.8rem;
	padding: 4.5rem 3.2rem;
	background-color: #181e27;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 450px) {
		max-width: 32.7rem;
		padding: 3.7rem 2.2rem;
	}
`;
const Image = styled.img`
	width: 16.2rem;
	height: 10.8rem;
	margin-bottom: 3.2rem;
`;
const Rating = styled.p`
	background-color: #262e38;
	padding: 0.4rem 2rem;
	color: #fc7614;
	font-size: 15px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: center;
	border-radius: 1.2rem;
`;
const Thanks = styled.h2`
	font-size: 28px;
	font-weight: 700;
	line-height: 35px;
	letter-spacing: 0px;
	text-align: left;
	color: white;
	margin: 3.2rem 0 0.7rem;
`;
const ResultText = styled.p`
	font-size: 15px;
	font-weight: 400;
	line-height: 24px;
	letter-spacing: 0px;
	text-align: center;
	color: #969fad;
	max-width: 34rem;
`;
