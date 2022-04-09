import React from "react";
import styled from "styled-components";
import { KazamaRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  kazamaPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const KazamaPrice: React.FC<Props> = ({ kazamaPriceUsd }) => {
  return kazamaPriceUsd ? (
    <PriceLink
      href="#"
      target="_blank"
    >
      <KazamaRoundIcon width="24px" mr="8px" />
      <Text color="textSubtle" bold>{`$${kazamaPriceUsd.toFixed(7)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(KazamaPrice);
