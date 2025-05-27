import AuthForm from "@/components/AuthForm";

const Resgister = () => {
  return (
    <section className="relative flex-center pattern flex-col w-full">
      <div className="absolute inset-0 bg-[#8848e8]/20" />
      <div className="z-10">
        <AuthForm type="register" />
      </div>
    </section>
  );
};

export default Resgister;
