'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { questions } from '@/constants';

const Questions = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Got Questions? We have Got Answers!
      </h2>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {questions.map(({ id, question, answer }) => (
          <AccordionItem
            key={id}
            value={id}
            className="border rounded-xl shadow-sm px-4 py-1"
          >
            <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-700 mt-2">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Questions;
