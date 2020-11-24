import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import {
  PrimaryContainer,
  ContainerSecond,
  Name,
  Photo,
  Description,
  Infos,
  Info,
  SocialMedia,
  Media,
  TextMedia,
  Values,
  Shares,
  SharePrice,
  Locale,
  Segment,
  ContainerLocation
} from './styles';


import api from '../../services/Api';
import { formatPrice } from '../../shared/util/format';

export default function AboutPage({ route }) {

  const [enterpriseInfo, setEnterpriseInfos] = useState(null);
  const { enterpriseId } = route.params;

  useEffect(() => {
    async function loadInfos(id) {
      const response = await api.get(`enterprises/${id}`);

      const { enterprise } = response.data;

      enterprise.sharePriceFormatted = formatPrice(enterprise.share_price);

      setEnterpriseInfos(enterprise);
    }

    loadInfos(enterpriseId);
  }, []);

  return (
    <PrimaryContainer>
      {enterpriseInfo ? (
        <ScrollView>
          <ContainerSecond>
            <Name>{enterpriseInfo.enterprise_name}</Name>
            {enterpriseInfo.photo && (
              <Photo
                source={{
                  uri: `http://empresas.ioasys.com.br${enterpriseInfo.photo}`,
                }}
              />

            )}
            <Description>{enterpriseInfo.description}</Description>
            <Infos>
              <Info>
                Email:{' '}
                {enterpriseInfo.email_enterprise
                  ? enterpriseInfo.email_enterprise
                  : 'Não informado'}
              </Info>
              <Info>
                Telefone:{' '}
                {enterpriseInfo.phone ? enterpriseInfo.phone : 'Não informado'}
              </Info>
              <SocialMedia>
                <Media>
                  <MaterialCommunityIcons
                    name="facebook-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    Facebook:{' '}
                    {enterpriseInfo.facebook
                      ? enterpriseInfo.facebook
                      : 'Não informado'}
                  </TextMedia>
                </Media>
                <Media>
                  <MaterialCommunityIcons
                    name="twitter-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    Twitter:{' '}
                    {enterpriseInfo.twitter
                      ? enterpriseInfo.twitter
                      : 'Não informado'}
                  </TextMedia>
                </Media>
                <Media>
                  <MaterialCommunityIcons
                    name="linkedin-box"
                    color="rgba(2, 2, 2, 0.7)"
                    size={30}
                    style={{ marginRight: 5 }}
                  />
                  <TextMedia>
                    LinkedIn:{' '}
                    {enterpriseInfo.linkedin
                      ? enterpriseInfo.linkedin
                      : 'Não informado'}
                  </TextMedia>
                </Media>
              </SocialMedia>
              <Values>
                <Shares>Procurando: {enterpriseInfo.shares}</Shares>
                <SharePrice>
                  Preço: {enterpriseInfo.sharePriceFormatted}
                </SharePrice>
              </Values>
              <ContainerLocation>
                <Locale>
                  Local: {enterpriseInfo.city}, {enterpriseInfo.country}
                </Locale>
                <Segment>
                  Segmento: {enterpriseInfo.enterprise_type.enterprise_type_name}
                </Segment>
              </ContainerLocation>

            </Infos>
          </ContainerSecond>
        </ScrollView>
      ) : null}
    </PrimaryContainer>
  );
}
