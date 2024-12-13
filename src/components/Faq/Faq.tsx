"use client"
import { Accordion, Container, Grid, Image, Title } from '@mantine/core';
import classes from './FaqWithImage.module.css';

export function Faq() {
    return (
        <div className={`${classes.wrapper} mt-16`}>
            <Container size="lg">
                <Grid id="faq-grid" gutter={50}>
                    <Grid.Col span={12} md={6}>
                        <Image width={''} height={''} src='https://ui.mantine.dev/_next/static/media/image.b0c2306b.svg' alt="Frequently Asked Questions" />
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <Title order={2} ta="left" className={classes.title}>
                            Frequently Asked Questions
                        </Title>

                        <Accordion chevronPosition="right" defaultValue="reset-password" variant="separated">
                            <Accordion.Item className={classes.item} value="reset-password">
                                <Accordion.Control>Can I customize my meal plans to fit dietary restrictions?</Accordion.Control>
                                <Accordion.Panel>Yes, you can easily customize meal plans to suit your dietary restrictions. Whether you&apos;re vegan, vegetarian, gluten-free, or have other specific needs, our platform allows you to filter recipes and create meal plans that align with your preferences. You can also exclude certain ingredients and sort recipes by dietary type for a tailored experience.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="another-account">
                                <Accordion.Control>Does the meal planner provide nutritional information?</Accordion.Control>
                                <Accordion.Panel>Yes, each recipe includes detailed nutritional information such as calories, macronutrients, and vitamins. This helps you track your dietary intake and meet your health goals.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="newsletter">
                                <Accordion.Control>Can I share my meal plans with others?</Accordion.Control>
                                <Accordion.Panel>Absolutely! You can share your meal plans with family or friends via email or by generating a unique shareable link directly from your account. It’s perfect for collaborative meal planning or gifting ideas to loved ones.</Accordion.Panel>
                            </Accordion.Item>

                            <Accordion.Item className={classes.item} value="credit-card">
                                <Accordion.Control>
                                    How do I save my favorite recipes for later?
                                </Accordion.Control>
                                <Accordion.Panel>You can save your favorite recipes by clicking the &quot;Save&quot; or &quot;Favorite&quot; button on the recipe page. Saved recipes will appear in your personal collection, which you can access anytime from your dashboard.</Accordion.Panel>
                            </Accordion.Item>
                        </Accordion>
                    </Grid.Col>
                </Grid>
            </Container>
        </div>

    );
}