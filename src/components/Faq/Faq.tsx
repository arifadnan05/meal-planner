"use client"
import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import classes from './FaqWithImage.module.css';



const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

export function Faq() {
    return (
        <div className={`${classes.wrapper} mt-16`}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={12} md={6}>
                        <Image src='https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg' alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>How can I reset my password?</Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>Can I create more than one account?</Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>How can I subscribe to the monthly newsletter?</Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    Do you store credit card information securely?
                                </Accordion.Control>
                                <Accordion.Panel>{placeholder}</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>

    );
}