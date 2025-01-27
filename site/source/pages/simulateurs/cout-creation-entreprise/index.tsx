import { Trans } from 'react-i18next'
import { styled } from 'styled-components'

import { Condition } from '@/components/EngineValue/Condition'
import SimulateurWarning from '@/components/SimulateurWarning'
import Simulation, {
	SimulationGoal,
	SimulationGoals,
} from '@/components/Simulation'
import { Grid } from '@/design-system/layout'
import { H3 } from '@/design-system/typography/heading'
import { Li, Ul } from '@/design-system/typography/list'

export default function CoutCreationEntreprise() {
	return (
		<>
			<Simulation
				showQuestionsFromBeginning
				explanations={
					<Condition expression="entreprise . coût formalités . création > 0">
						<H3>Détails</H3>
						<Grid container>
							<Grid item xl={6} lg={8} sm={10}>
								<SimulationGoal
									displayedUnit="€ HT"
									dottedName="entreprise . coût formalités . RCS . création"
									label="Frais d'inscription au registre du commerce et des sociétés"
									editable={false}
									small
									round={false}
								/>
								<SimulationGoal
									displayedUnit="€ HT"
									dottedName="entreprise . coût formalités . CMA . création"
									label="Frais d'inscription à la chambre des Métiers et de l'Artisanat"
									editable={false}
									small
									round={false}
								/>
								<SimulationGoal
									displayedUnit="€ HT"
									dottedName="entreprise . coût formalités . RSAC . création"
									label="Frais d'inscription au registre spécial des agents commerciaux"
									editable={false}
									small
									round={false}
								/>
								<SimulationGoal
									displayedUnit="€ HT"
									dottedName="entreprise . coût formalités . bénéficiaires effectifs . création"
									label="Frais de déclaration des bénéficiaires effectifs"
									editable={false}
									small
									round={false}
								/>
								<SimulationGoal
									displayedUnit="€ HT"
									dottedName="entreprise . coût formalités . annonce légale . forfaitaire"
									label="Frais d'annonce légale"
									editable={false}
									small
									round={false}
								/>
							</Grid>
						</Grid>
					</Condition>
				}
			>
				<SimulateurWarning
					simulateur="coût-création-entreprise"
					informationsComplémentaires={
						<Ul>
							<StyledLi>
								<Trans i18nKey="simulateurs.warning.coût-création-entreprise.pas-reprise">
									Ce simulateur calcule les frais de création pour les nouvelles
									entreprises. Il ne prend pas en compte le cas des reprises
									d’entreprises existantes.
								</Trans>
							</StyledLi>
							<StyledLi>
								<Trans i18nKey="simulateurs.warning.coût-création-entreprise.greffe">
									Des frais de greffe peuvent être facturés en raison
									d’informations ou de documents manquants ou incorrects. Par
									ailleurs, en cas d’envoi de courrier, le greffe facture les
									frais postaux.
								</Trans>
							</StyledLi>
							<StyledLi>
								<Trans i18nKey="simulateurs.warning.coût-création-entreprise.JAL">
									Ce simulateur calcule les frais de créations uniquement pour
									les SARL, EURL, SAS, SASU, EI et SEL. Il ne prend pas encore
									en compte les autres formes de société (SA, SCA, SCS, SCI,
									SCP, SNC, SCM, coopératives, GIE, GAEC, etc.)
								</Trans>
							</StyledLi>
						</Ul>
					}
				/>
				<SimulationGoals legend="Simulateur du coût de création d'une entreprise">
					<SimulationGoal
						displayedUnit="€ HT"
						dottedName="entreprise . coût formalités . création"
						editable={false}
						round={false}
					/>
				</SimulationGoals>
			</Simulation>
		</>
	)
}

const StyledLi = styled(Li)`
	&::before {
		color: ${({ theme }) => theme.colors.bases.tertiary[800]} !important;
	}
`
