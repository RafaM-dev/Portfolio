"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import './styles.css'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card } from "../ui/card"
import { useEffect, useRef } from "react"
import { Textarea } from "../ui/textarea"
import { useToast } from "../ui/use-toast"
import emailjs from 'emailjs-com';
import { useTranslations } from "next-intl";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ContactForm() {
  const { toast } = useToast()
  const t = useTranslations("Contact");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  })

  const form2 = useRef<HTMLFormElement | null>(null);

  const onSubmit2 = (data: z.infer<typeof formSchema>) => {
    emailjs.send('service_79cog4e', 'template_rdaneiw', data, 'LCGFukJ0NJo2O1HJy')
      .then(
        () => {
          console.log('SUCCESS!');
          toast({
            description: "Correo Enviado.",
            duration: 2400,
          })
          form.reset(); // resetea el formulario
        },
        (error: any) => {
          toast({
            description: error.text,
            duration: 2400,
          })
          console.log('FAILED...', error.text);
        },
      );
  };

  useEffect(() => {
    const all = document.querySelectorAll(".card");

    const mouseMoveHandler = (ev: { clientX: number; clientY: number; }) => {
      all.forEach((e) => {
        const blob = e.querySelector(".blob") as HTMLElement;
        const fblob = e.querySelector(".fakeblob") as HTMLElement;
        const rec = fblob?.getBoundingClientRect();
        if (blob && rec) {
          blob.style.opacity = "1";

          blob.animate(
            [
              {
                transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
                  }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
              }
            ],
            {
              duration: 300,
              fill: "forwards"
            }
          );
        }
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="card">
      <Card className={cn("inner xl:w-[55rem] w-[20rem] sm:w-[42rem] lg:w-[60rem] 2xl:backdrop-blur-[80px]")}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit2)} ref={form2} className="flex flex-col gap-5 p-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">{t("name")}</FormLabel>
                  <FormControl>
                    <Input className="text-white" placeholder={t("placeholderName")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem >
                  <FormLabel className="text-white">{t("email")}</FormLabel>
                  <FormControl>
                    <Input type="email" className="text-white " placeholder={t("placeholderEmail")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem >
                  <FormLabel className="text-white">{t("description")}</FormLabel>
                  <FormControl>
                    <Textarea className="text-white" placeholder={t("placeholderDescription")} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-transparent border-solid border-2 w-20 m-auto mt-5 hover:bg-neutral-200 hover:text-black">{t("button")}</Button>
          </form>
        </Form>
      </Card>
      <div className="blob"></div>
      <div className="fakeblob"></div>
    </div>
  )
}
