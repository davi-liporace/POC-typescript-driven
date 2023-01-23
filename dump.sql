--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: lancamentos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.lancamentos (
    id integer NOT NULL,
    valor integer NOT NULL,
    nome text NOT NULL,
    "time" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: lancamentos_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.lancamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: lancamentos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.lancamentos_id_seq OWNED BY public.lancamentos.id;


--
-- Name: lancamentos id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lancamentos ALTER COLUMN id SET DEFAULT nextval('public.lancamentos_id_seq'::regclass);


--
-- Data for Name: lancamentos; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.lancamentos VALUES (3, 5, 'feijão', '2023-01-22 18:37:36.003912');
INSERT INTO public.lancamentos VALUES (2, 10, 'arroz', '2023-01-22 18:37:28.467');
INSERT INTO public.lancamentos VALUES (5, 50, 'arroz', '2023-01-23 10:11:49.204199');
INSERT INTO public.lancamentos VALUES (4, 5, 'cachorro', '2023-01-23 10:11:19.703925');
INSERT INTO public.lancamentos VALUES (6, 5, 'arroz', '2023-01-23 12:30:06.402882');
INSERT INTO public.lancamentos VALUES (7, 5, 'teste', '2023-01-23 12:30:21.486564');


--
-- Name: lancamentos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.lancamentos_id_seq', 7, true);


--
-- Name: lancamentos lancamentos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.lancamentos
    ADD CONSTRAINT lancamentos_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

